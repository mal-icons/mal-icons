import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-full-coverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFullCoverage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24 0-42-18t-18-42v-459q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-639v459h584q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T724-120H140Zm169-171q-24 0-42-18t-18-42v-459q0-12.75 8.63-21.37T279-840h611q12.75 0 21.38 8.63T920-810v459q0 24-18 42t-42 18H309Zm0-60h551v-429H309v429Zm116-131h108q12.75 0 21.38-8.62T563-512v-155q0-12.75-8.62-21.37T533-697H425q-12.75 0-21.37 8.63T395-667v155q0 12.75 8.63 21.38T425-482Zm225 0h80q18 0 31-13t13-31q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31q0 18 13 31t31 13Zm0-127h80q18 0 31-13t13-31q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31q0 18 13 31t31 13ZM309-351v-429 429Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFullCoverage;
