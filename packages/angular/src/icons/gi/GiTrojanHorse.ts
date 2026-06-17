import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-trojan-horse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTrojanHorse {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M336 16l9.61 34.55v36.47l59.79 44.84 69.99 35.85 11.02-33.04-88.81-97.12-19.59 4.9L336 16zm-12.49 20.13L270.46 155.5h28.06l29.09-72.73v-42.54l-4.1-4.1zm67.86 21.42l34.88 35.84-41.64-11.64 6.76-24.2zm-52.93 46.6l-24.14 60.35 50.72 126.8 24.77-148.63-51.35-38.51zM89.61 173.5v142h62v-96h146v96h57.71l-56.8-142H89.61zm-18 9l-46 34.5v117.01l30 10V240.77l16-16V182.5zm98 55v14h110v-14h-110zm0 32v14h110v-14h-110zm0 32v14h110v-14h-110zm-80 32v78.51c2.29-0.33 4.62-0.51 7-0.51 7.91 0 15.4 1.91 22.03 5.28l37.01-83.28h-66.04zm209.06 0l9 81.04c5.29-1.96 10.99-3.04 16.94-3.04 5.2 0 10.210.83 14.93 2.35l17.86-80.35h-58.72zm-202.06 96c-17.23 0-31 13.77-31 31s13.77 31 31 31c17.23 0 31-13.77 31-31s-13.77-31-31-31zm228 0c-17.23 0-31 13.77-31 31s13.77 31 31 31c17.23 0 31-13.77 31-31s-13.77-31-31-31zm-228 15c8.84 0 16 7.16 16 16s-7.16 16-16 16c-8.84 0-16-7.16-16-16s7.16-16 16-16zm228 0c8.84 0 16 7.16 16 16s-7.16 16-16 16c-8.84 0-16-7.16-16-16s7.16-16 16-16zm-179.85 7c0.55 2.920.85 5.930.85 9s-0.3 6.08-0.85 9h131.7c-0.55-2.92-0.85-5.93-0.85-9s0.3-6.080.85-9H144.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTrojanHorse;
