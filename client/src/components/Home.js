import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';

const { Title } = Typography;

class Home extends Component {
  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <Title level={3}>Overview of Random Data</Title>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt at augue id maximus. In cursus turpis accumsan risus fermentum, a fringilla ligula pharetra. Pellentesque volutpat porta tellus, nec gravida enim vehicula vitae. Sed ut lobortis ligula, id eleifend nisi. Duis sem est, rutrum sed neque ac, rhoncus scelerisque dolor. Suspendisse eget odio ligula. Fusce lacinia, lectus sed aliquam eleifend, erat felis luctus orci, at condimentum libero nulla ultricies enim. Aenean efficitur elit vitae bibendum maximus. Donec lorem lorem, dictum non sollicitudin eget, rutrum vitae justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus lacinia pulvinar leo, tincidunt ullamcorper est tincidunt eget. Sed bibendum elit purus, in tristique risus aliquam ac. Curabitur condimentum, leo a rutrum aliquam, tellus tellus pulvinar leo, vitae tristique sapien tellus eget enim. Donec massa orci, mattis nec nisl rhoncus, bibendum egestas risus. Donec felis libero, rutrum id enim ut, aliquam bibendum ante.
        </Typography>
        <Typography>
          Etiam faucibus eleifend massa, a ultrices arcu rhoncus ut. Etiam consequat lectus at orci elementum lacinia. Ut hendrerit varius tincidunt. In tincidunt ex et ipsum finibus dapibus. Nulla odio justo, tincidunt id posuere in, euismod et augue. Pellentesque imperdiet, augue sed convallis hendrerit, ligula nibh venenatis eros, eu viverra tellus nisi non mauris. Vestibulum ac lacus leo. Cras a ultrices risus. Fusce varius lectus sapien, ut pharetra elit laoreet a. Vivamus sapien arcu, elementum vitae posuere quis, condimentum eget nunc.
        </Typography>
        <Typography>
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam efficitur congue venenatis. Aenean laoreet eros ut dolor accumsan, ac lobortis nisi dapibus. Fusce auctor vestibulum suscipit. Morbi quam mi, egestas ac arcu ac, ultricies posuere lacus. Etiam ut pretium libero, id finibus orci. Cras sit amet eros quis nunc fringilla tristique sit amet ut ligula. Nam in dignissim sem. Aenean tristique dolor vitae nunc feugiat suscipit. Suspendisse ut vulputate ipsum. Maecenas pharetra ante ut tortor euismod efficitur. Donec sed laoreet orci. Ut ac malesuada mi. Vivamus ac consectetur sapien. Vivamus tortor dui, blandit at sollicitudin vel, faucibus nec nulla.
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(Home);
