import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-full-coverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFullCoverage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24 0-42-18t-18-42v-489h60v489h614v60H140Zm169-171q-24 0-42-18t-18-42v-489h671v489q0 24-18 42t-42 18H309Zm0-60h551v-429H309v429Zm86-131h168v-215H395v215Zm211 0h168v-88H606v88Zm0-127h168v-88H606v88ZM309-351v-429 429Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFullCoverage;
