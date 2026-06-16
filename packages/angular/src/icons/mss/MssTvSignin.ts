import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tv-signin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTvSignin {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-360h320v-18.72Q640-417 594.5-442T480-467q-69 0-114.5 25T320-378.72V-360Zm159.92-174q30.08 0 51.58-21.42 21.5-21.42 21.5-51.5 0-30.08-21.42-51.58-21.42-21.5-51.5-21.5-30.08 0-51.58 21.42-21.5 21.42-21.5 51.5 0 30.08 21.42 51.58 21.42 21.5 51.5 21.5ZM330-120v-80H80v-640h800v640H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTvSignin;
