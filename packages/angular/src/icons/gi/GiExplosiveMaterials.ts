import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-explosive-materials",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiExplosiveMaterials {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M16.5 12.03v151.26l54.93 177.1c-0.250.09-0.490.19-0.740.28l90.28 47.75-32.21 40.03 28.82 38.04 89.61 27.95H361.08l-196.78-37.42c2.45-3.86 4.57-7.94 6.33-12.22l325.95 18.11V413.25l-321.63 17.31c0.96-4.73 1.49-9.62 1.56-14.63l320.06-60.5v-50.81l-320.8 99.22c-0.69-5.03-1.87-9.9-3.46-14.58l324.26-170.49v-65.41L167.35 377.77c-2.26-4.26-4.9-8.28-7.88-12.03L496.57 62.84v-50.81l00.01H456.27L148.53 354.46c-3.74-3.15-7.78-5.96-12.07-8.38L364.58 12.03H298l-172.72 328.83c-3.34-1.24-6.78-2.25-10.32-3.04l101.28-325.79H168.35l-60.96 324.47c-3.04-0.37-6.14-0.57-9.28-0.58l17.1-323.89h-44.97l17.81 324.47c-3.380.41-6.69 1.03-9.93 1.85L16.51 12.03zm22.64 349.84c-12.63 13.97-20.31 32.51-20.31 52.9 0 43.66 35.19 78.84 78.84 78.84 19.18 0 36.72-6.81 50.36-18.14l-54.41-39.78 29.43-32.42-83.9-41.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiExplosiveMaterials;
