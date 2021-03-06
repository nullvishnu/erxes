import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'modules/common/components';
import { FlexItem, LeftItem } from 'modules/common/components/step/styles';
import { IBrand } from 'modules/settings/brands/types';
import * as React from 'react';
import Toggle from 'react-toggle';
import { SelectBrand } from '../..';

type Props = {
  onChange: (
    name: 'brandId' | 'languageCode' | 'notifyCustomer',
    value: string
  ) => void;
  brandId?: string;
  brands?: IBrand[];
  notifyCustomer?: boolean;
  showFaq?: boolean;
};

class Options extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onChangeFunction = this.onChangeFunction.bind(this);
  }

  onChangeFunction(name, value) {
    this.setState({ [name]: value });
    this.props.onChange(name, value);
  }

  render() {
    return (
      <FlexItem>
        <LeftItem>
          <SelectBrand
            brands={this.props.brands || []}
            defaultValue={this.props.brandId}
            onChange={e => this.onChangeFunction('brandId', e.target.value)}
          />

          <FormGroup>
            <ControlLabel>Show FAQ</ControlLabel>

            <FormControl
              checked={this.props.showFaq || false}
              componentClass="checkbox"
              onChange={(e: React.FormEvent<HTMLElement>) => {
                const target = e.currentTarget as HTMLInputElement;

                return this.onChangeFunction('showFaq', target.checked);
              }}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Notify customer</ControlLabel>
            <div>
              <Toggle
                className="wide"
                checked={this.props.notifyCustomer}
                onChange={e =>
                  this.onChangeFunction('notifyCustomer', e.target.checked)
                }
                icons={{
                  checked: <span>Yes</span>,
                  unchecked: <span>No</span>
                }}
              />
            </div>
          </FormGroup>
        </LeftItem>
      </FlexItem>
    );
  }
}

export default Options;
