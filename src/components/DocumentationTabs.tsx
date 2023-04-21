"use client";

import { FC } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/Tabs";
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentationCode";
import SimpleBar from "simplebar-react";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar forceVisible="y">
          <Code language="javascript" code={nodejs} show animated />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar forceVisible="y">
          <Code animated code={python} language="python" show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
