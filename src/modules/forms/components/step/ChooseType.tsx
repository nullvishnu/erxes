import { ControlLabel, FormGroup, Icon } from 'modules/common/components';
import { LeftItem, Preview } from 'modules/common/components/step/styles';
import { __ } from 'modules/common/utils';
import * as React from 'react';
import { CalloutPreview } from './preview';
import { Box, BoxRow, FlexItem } from './style';

type Props = {
  type: string;
  onChange: (name: 'type', value: string) => void;
  calloutTitle?: string;
  calloutBtnText?: string;
  bodyValue?: string;
  color: string;
  theme: string;
};

class ChooseType extends React.Component<Props, {}> {
  renderBox(name: string, icon: string, value: string) {
    return (
      <Box
        selected={this.props.type === value}
        onClick={() => this.onChange(value)}
      >
        <Icon icon={icon} />
        <span>{__(name)}</span>
      </Box>
    );
  }

  onChange(value: string) {
    return this.props.onChange('type', value);
  }

  render() {
    return (
      <FlexItem>
        <LeftItem>
          <FormGroup>
            <ControlLabel>Choose a flow type</ControlLabel>
          </FormGroup>
          <BoxRow>
            {this.renderBox('ShoutBox', 'speech-bubble-3', 'shoutbox')}
            {this.renderBox('Popup', 'expand', 'popup')}
          </BoxRow>

          <BoxRow>
            {this.renderBox('Embedded', 'computer', 'embedded')}
            {this.renderBox('Dropdown', 'downarrow', 'dropdown')}
          </BoxRow>

          <BoxRow>
            {this.renderBox('Slide-in Left', 'logout-2', 'slideInLeft')}
            {this.renderBox('Slide-in Right', 'logout-1', 'slideInRight')}
          </BoxRow>
        </LeftItem>
        <Preview>
          <CalloutPreview {...this.props} />
        </Preview>
      </FlexItem>
    );
  }
}

export default ChooseType;
