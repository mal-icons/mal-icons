import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-podium-third",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPodiumThird {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M417.95 168.9c-11.59 0-23 12.8-23 31 0 18.2 11.41 31 23 31 11.59 0 23-12.8 23-31 0-18.2-11.41-31-23-31zm-103.95 2.98l-16.1 8.05c15.09 30.19 51.37 56.81 82.19 74.44l14.2 184.53h14.67v-103h18v103h14.67l11.85-154.09 13.93 51.89 17.38-4.66c-6.16-34.54-15.32-97.86-34.21-102.39-7.31 11.54-18.87 19.26-32.62 19.26-13.75 0-25.31-7.72-32.62-19.26-26.44-8.62-51.42-27.87-71.33-57.77zM169 313v96H25v78h462v-30H343V313H169z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPodiumThird;
