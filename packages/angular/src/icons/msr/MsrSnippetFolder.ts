import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-snippet-folder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSnippetFolder {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h256q12.44 0 23.72 5t19.37 13.09L481-740h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Zm420-120v-220h75l65 65v155H560Zm-30 60h200q12.75 0 21.38-8.62T760-310v-198q0-5.56-2-10.78Q756-524 751-529l-82-82q-5-5-10.22-7-5.22-2-10.78-2H530q-12.75 0-21.37 8.63T500-590v280q0 12.75 8.63 21.38T530-280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSnippetFolder;
