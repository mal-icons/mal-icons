import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-dry",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDry {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M619-650q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 0.5 66.5T643-791q24 32 32 64.5t1 76.5h-57Zm160 0q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 0.5 66.5T803-791q24 32 32 64.5t1 76.5h-57ZM760-80H80v-427l374-241 54 54-84 134h376v60H316l91-147-267 174v333h620v60ZM480-360v-60h400v60H480Zm0 140v-60h360v60H480ZM310-333Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDry;
