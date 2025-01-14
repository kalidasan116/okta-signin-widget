/*
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Box, Icon } from '@okta/odyssey-react-mui';
import classNames from 'classnames';
import { h } from 'preact';
import { IdentifierContainerElement, UISchemaElementComponent } from 'src/types';

const IdentifierContainer: UISchemaElementComponent<{
  uischema: IdentifierContainerElement
}> = ({ uischema }) => {
  const { options: { identifier } } = uischema;

  const mainContainerClasses = classNames('identifier-container');
  const identifierSpanClasses = classNames('identifier', 'no-translate');

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBlockEnd={4}
      maxWidth={1}
      className={mainContainerClasses}
    >
      <Box
        flex="auto"
        flexDirection="row"
        flexGrow="0"
        paddingX={4}
        paddingY={2}
        sx={(theme) => ({
          borderRadius: '36px',
          backgroundColor: theme.palette.grey[50],
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        })}
      >
        <Box
          component="span"
          sx={(theme) => ({
            color: theme.palette.primary.main,
            verticalAlign: 'middle',
          })}
        >
          <Icon
            name="user"
            titleAccess="User"
            sx={{ width: '16px', height: '16px' }}
          />
        </Box>
        <Box
          component="span"
          className={identifierSpanClasses}
          data-se="identifier"
          title={identifier}
          sx={{
            marginInlineStart: '10px',
          }}
        >
          {identifier}
        </Box>
      </Box>
    </Box>
  );
};

export default IdentifierContainer;
