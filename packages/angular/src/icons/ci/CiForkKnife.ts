import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-fork-knife",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiForkKnife {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Fork &amp; Knife"}],["path",{"d":"M18.83,2.25a6.47,6.47,0,0,0-4.37,6.12v3.15a1.78,1.78,0,0,0,1.78,1.78h2.7v8.14a0.50.5,0,0,0,0.50.50.510.51,0,0,0,0.5-0.5V2.56a0.510.51,0,0,0-0.5-0.50.470.47,0,0,0-0.170.03ZM16.24,12.3a0.780.78,0,0,1-0.78-0.78V8.37a5.48,5.48,0,0,1,3.48-5.1V12.3Z"}],["path",{"d":"M11.44,2.07a0.50.5,0,0,0-0.50.5V7.55H8.5V2.57a0.50.5,0,0,0-0.5-0.50.50.5,0,0,0-0.50.5V7.55H5.06V2.57a0.50.5,0,0,0-0.5-0.50.50.5,0,0,0-0.50.5V9.05a2.51,2.51,0,0,0,2.5,2.5H7.5v9.89a0.510.51,0,0,0,0.50.50.50.5,0,0,0,0.5-0.5V11.55h0.94a2.5,2.5,0,0,0,2.5-2.5V2.57A0.50.5,0,0,0,11.44,2.07Zm-0.5,6.98a1.5,1.5,0,0,1-1.5,1.5H6.56a1.51,1.51,0,0,1-1.5-1.5v-0.5h5.88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiForkKnife;
