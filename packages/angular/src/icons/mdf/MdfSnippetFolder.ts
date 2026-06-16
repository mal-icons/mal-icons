import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-snippet-folder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSnippetFolder {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.88 10.5 1.62 1.62v3.38h-3v-5h1.38zM22 8v10c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2l0.01-12c0-1.10.89-2 1.99-2h6l2 2h8c1.1 0 2 0.9 2 2zm-3 3.5L16.5 9H13v8h6v-5.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSnippetFolder;
