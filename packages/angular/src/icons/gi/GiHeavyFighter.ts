import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-heavy-fighter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHeavyFighter {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M215.08 20.04L100.75 135.69l52.14 79.31L41.66 378.65 21 491.96l112.85-20.74 162.97-111.69 79.42 52.78L491 297.09 215.08 20.04zm100.87 21.89l-21.08 21.18L311.73 80.03l21.09-21.17-16.87-16.94zm130.71 4.25l-84.32 84.67 16.86 16.94 84.33-84.67-16.87-16.94zm-75.89 8.46l-42.16 42.34 16.87 16.93 42.17-42.33-16.87-16.94zm67.46 67.75l-42.15 42.33 16.86 16.93 42.17-42.33-16.87-16.93zm12.66 55.04l-21.08 21.17 16.86 16.93 21.09-21.17-16.87-16.94zM244.36 244.29c6.310.15 11.87 2.17 15.92 6.24 11.79 11.84 6.35 36.51-12.16 55.1-18.51 18.59-43.08 24.06-54.87 12.22-11.79-11.84-6.35-36.51 12.17-55.1 12.15-12.2 26.9-18.75 38.94-18.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHeavyFighter;
