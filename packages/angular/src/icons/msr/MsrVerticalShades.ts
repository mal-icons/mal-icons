import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-vertical-shades",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrVerticalShades {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-180h105v-600H220v600Zm165 0h190v-600H385v600Zm250 0h105v-600H635v600Zm-415 0v-600 600Zm520 0v-600 600Zm-630 60q-12.75 0-21.37-8.68Q80-137.35 80-150.18 80-163 88.63-171.5T110-180h50v-600q0-24.75 17.63-42.37T220-840h520q24.75 0 42.38 17.63T800-780v600h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-120H110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrVerticalShades;
