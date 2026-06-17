import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lee-enfield",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLeeEnfield {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M465.66 42.63l-16.16 11.83 11.82 15.69-0.270.18 6.32 8.56 22.55-17-8-10.68-6.26 4.71-10-13.29zm-29.09 21.48L269.11 183.86c0 0.54-0.06 1.03-0.06 1.54l-2.16 22.78a16 16 0 0 1-6.52 11.46l-41.91 30.5a16 16 0 0 1-22.35-3.52l-4.95-6.8-29.79 21.48c-1.67 1.22-2.01 3.74-0.81 6l2.09 3.95a4.9 4.9 0 0 1-0.16 5.37l-48 58.71a1.77 1.77 0 0 1-0.280.27l-90.7 70.42c-1.84 1.43-1.91 4.46-0.15 6.76l40.82 54.18a5.69 5.69 0 0 0 4.41 2.41h0.18a3.47 3.47 0 0 0 2.84-1.59l84.43-111.3a4.2 4.2 0 0 0 1.33-4.37s-3.04-16.07-2.32-17.07c0 0 28.7-38.39 28.95-38.58L454.79 88.7l-18.22-24.59zm-183.5 119.82l-54.14 39.39 10.12 13.91 41.91-30.5 2.11-22.8zm20.14 64.25l-38.63 29.6 7.49 15.37a5.14 5.14 0 0 0 4.73 2.87h0.25a6 6 0 0 0 4.57-2.45l22.77-30.59a5.63 5.63 0 0 0 1-4.51l-2.18-10.29zm-59.44 45.6l-5.93 4.59a12.81 12.81 0 0 1-16.48 18.16l-2.26 3-2.26 3a20.27 20.27 0 0 0 30.08-14.81 20.1 20.1 0 0 0-3.15-13.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLeeEnfield;
