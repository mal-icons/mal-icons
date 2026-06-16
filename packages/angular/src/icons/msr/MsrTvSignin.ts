import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tv-signin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTvSignin {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-200q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v50q0 12.75-8.62 21.38T600-120H360q-12.75 0-21.37-8.62T330-150v-50H140Zm0-60h680v-520H140v520Zm0 0v-520 520Zm180-100h320v-18.72Q640-417 594.5-442T480-467q-69 0-114.5 25T320-378.72V-360Zm159.92-174q30.08 0 51.58-21.42 21.5-21.42 21.5-51.5 0-30.08-21.42-51.58-21.42-21.5-51.5-21.5-30.08 0-51.58 21.42-21.5 21.42-21.5 51.5 0 30.08 21.42 51.58 21.42 21.5 51.5 21.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTvSignin;
