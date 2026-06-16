import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-curtains",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCurtains {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-180h168q-8-74-49-148t-119-95v243Zm0-600v244q78-21 118.5-95.5T387-780H220Zm22 300q94 29 146.5 117.5T449-180h62q8-94 60-182.5T717-480q-94-29-146-117.5T511-780h-63q-8 94-60 182.5T242-480Zm498-56v-244H572q8 74 49 148.5T740-536Zm0 356v-244q-78 21-119 95.5T572-180h168Zm-630 60q-12.75 0-21.37-8.68Q80-137.35 80-150.18 80-163 88.63-171.5T110-180h50v-600q0-24.75 17.63-42.37T220-840h520q24.75 0 42.38 17.63T800-780v600h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-120H110Zm110-660v244-244Zm520 600v-244 244Zm-520 0v-243 243Zm520-356v-244 244Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCurtains;
