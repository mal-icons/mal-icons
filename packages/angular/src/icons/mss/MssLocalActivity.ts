import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-local-activity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLocalActivity {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m376-318 104-81 104 81-40-128 98-82H522l-42-122-42 122H318l98 82-40 128ZM80-160v-213q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-213h800v213q-37 7-61.5 37T794-480q0 40 24.5 69.5T880-373v213H80Zm60-60h680v-109q-38-26-62-65t-24-86q0-47 24-86t62-65v-109H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329v109Zm340-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLocalActivity;
