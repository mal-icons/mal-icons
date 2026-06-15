import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-magic-wand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlMagicWand {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1020.51 429.38L917.73 275.7l51.15-178.82c3.18-11.220.06-23.28-8.22-31.5-8.26-8.26-20.26-11.31-31.54-8.03l-178.51 52.13L596.32 5.57c-9.71-6.53-22.16-7.31-32.46-1.94-10.37 5.31-17.02 15.87-17.41 27.5l-5.54 185.94-146.5 114.59c-9.18 7.18-13.71 18.82-11.87 30.32s9.81 21.09 20.82 25.02l137.46 49.28c-0.930.74-1.9 1.39-2.77 2.26L7.29 969.3c-12.5 12.5-12.5 32.75 0 45.25 6.26 6.26 14.43 9.38 22.62 9.38 8.19 0 16.37-3.12 22.62-9.38l530.75-530.75c2.07-2.06 3.66-4.4 5.04-6.82l53.79 147.55a32.06 32.06 0 0 0 25.15 20.66c1.630.26 3.280.37 4.910.37A32.04 32.04 0 0 0 697.5 633.12l113.78-147.17 183.9-6.56c11.66-0.4 22.16-7.12 27.44-17.53 5.26-10.38 4.45-22.85-2.11-32.48zm-226.46-6.83c-9.50.32-18.37 4.88-24.19 12.4l-87.47 113.1-48.98-134.32c-3.25-8.94-10.32-15.94-19.28-19.15l-134.59-48.26 112.62-88.06c7.5-5.87 11.97-14.75 12.29-24.26l4.26-142.94 118.59 79.87a32.19 32.19 0 0 0 26.85 4.19l137.25-40.09-39.34 137.47a32.18 32.18 0 0 0 4.34 26.85l80.56 118.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlMagicWand;
