import React from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';

/**
 *
 * @author Yuki Takei <yuki@weseek.co.jp>
 *
 * @export
 * @class PageTagForm
 * @extends {React.Component}
 */

export default class PageTagForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pageTags: nextProps.pageTags
    });
  }

  render() {
    const options = [
      'John',
      'Miles',
      'Charles',
      'Herbie',
    ];
    return (
      <div className="tag-typeahead">
        <Typeahead
          value={this.props.pageTags}
          multiple={true}
          labelKey="name"
          emptyLabel={''}
          options={options}
          placeholder="tag name"
          // onBlur={this.handleSubmit}
          onChange={(selected) => {
            this.setState({selected});
          }}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

PageTagForm.propTypes = {
  pageTags: PropTypes.array,
  submitTags: PropTypes.func,
};

PageTagForm.defaultProps = {
};
