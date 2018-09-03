import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './category.reducer';
import { ICategory } from 'app/shared/model/onlineshop/category.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICategoryUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICategoryUpdateState {
  isNew: boolean;
}

export class CategoryUpdate extends React.Component<ICategoryUpdateProps, ICategoryUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { categoryEntity } = this.props;
      const entity = {
        ...categoryEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/category');
  };

  render() {
    const { categoryEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="gatewayApp.onlineshopCategory.home.createOrEditLabel">
              <Translate contentKey="gatewayApp.onlineshopCategory.home.createOrEditLabel">Create or edit a Category</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : categoryEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="category-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="descriptionLabel" for="description">
                    <Translate contentKey="gatewayApp.onlineshopCategory.description">Description</Translate>
                  </Label>
                  <AvField
                    id="category-description"
                    type="text"
                    name="description"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="sortOrderLabel" for="sortOrder">
                    <Translate contentKey="gatewayApp.onlineshopCategory.sortOrder">Sort Order</Translate>
                  </Label>
                  <AvField id="category-sortOrder" type="number" className="form-control" name="sortOrder" />
                </AvGroup>
                <AvGroup>
                  <Label id="dateAddedLabel" for="dateAdded">
                    <Translate contentKey="gatewayApp.onlineshopCategory.dateAdded">Date Added</Translate>
                  </Label>
                  <AvField id="category-dateAdded" type="date" className="form-control" name="dateAdded" />
                </AvGroup>
                <AvGroup>
                  <Label id="dateModifiedLabel" for="dateModified">
                    <Translate contentKey="gatewayApp.onlineshopCategory.dateModified">Date Modified</Translate>
                  </Label>
                  <AvField id="category-dateModified" type="date" className="form-control" name="dateModified" />
                </AvGroup>
                <AvGroup>
                  <Label id="statusLabel">
                    <Translate contentKey="gatewayApp.onlineshopCategory.status">Status</Translate>
                  </Label>
                  <AvInput
                    id="category-status"
                    type="select"
                    className="form-control"
                    name="status"
                    value={(!isNew && categoryEntity.status) || 'AVAILABLE'}
                  >
                    <option value="AVAILABLE">
                      <Translate contentKey="gatewayApp.CategoryStatus.AVAILABLE" />
                    </option>
                    <option value="RESTRICTED">
                      <Translate contentKey="gatewayApp.CategoryStatus.RESTRICTED" />
                    </option>
                    <option value="DISABLED">
                      <Translate contentKey="gatewayApp.CategoryStatus.DISABLED" />
                    </option>
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/category" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  categoryEntity: storeState.category.entity,
  loading: storeState.category.loading,
  updating: storeState.category.updating
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryUpdate);
