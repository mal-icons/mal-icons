import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rasa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRasa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.85 15.85-3.88-2.03H0.97V7.52h22.06v6.3h-2.18v2.03ZM0 6.55v8.24h16.73l5.09 2.67v-2.67H24V6.55H0Zm1.94 1.94h4.12v2.18l-1.330.52 1.36 1.67H4.84l-1.06-1.3-0.870.34v0.96h-0.97V8.49ZM8 12.85h-0.97V8.49h4.36v4.36h-0.97v-1.45H8v1.45Zm4.36-1.7V8.49h4.36v0.97h-3.39v0.73h3.39v2.67h-4.36v-0.97h3.39v-0.73h-3.39Zm5.33-0.24V8.49h4.36v4.36h-0.97v-1.45h-2.42v1.45h-0.97V10.91Zm-14.79-0.06 2.18-0.85v-0.55H2.91v1.4ZM8 9.46v0.97h2.42v-0.97H8Zm13.090.97v-0.97h-2.42v0.97h2.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRasa;
