<?php

namespace app\controllers;

use app\components\TestDataProvider;
use app\models\assets\Asset;
use Yii;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\Response;

class ApiController extends Controller
{
    public $enableCsrfValidation = false;

    public function beforeAction($action)
    {
        $this->response->format = 'json';
        return parent::beforeAction($action);
    }

    public function actionIndex(): Response
    {
        $provider = new TestDataProvider();
        return $this->asJson($provider->getData());
    }

    public function actionValidate(): Response
    {
        $data = Yii::$app->request->post();
        $model = $this->getModel($data);
        $result = $model->validate();
        return $this->asJson([
            'result' => $result,
            'errors' => $model->getErrors()
        ]);
    }

    public function getModel(array $data): Asset
    {
        $classId = ArrayHelper::remove($data, 'class_id');
        $class = Asset::CLASS_ID_TO_CLASS[$classId] ?? null;
        if (!$class) {
            throw new NotFoundHttpException();
        }
        return new $class($data);
    }
}