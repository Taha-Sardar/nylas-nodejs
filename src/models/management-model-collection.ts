import RestfulModelCollection from './restful-model-collection';

export default class ManagementModelCollection extends RestfulModelCollection {
  clientId?: string;

  constructor(modelClass, connection, clientId) {
    super(modelClass, connection);
    this.clientId = clientId;
  }

  path() {
    return `/a/${this.clientId}/${this.modelClass.collectionName}`;
  }

  _createModel(json: { [key: string]: any }) {
    return new this.modelClass(this.connection, this.clientId, json);
  }
}