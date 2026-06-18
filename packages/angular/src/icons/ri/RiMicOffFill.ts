import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mic-off-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMicOffFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.42 17.84C15.39 18.42 14.23 18.81 13 18.95V23H11V18.95C6.83 18.48 3.52 15.17 3.06 11H5.07C5.56 14.39 8.47 17 12 17C13.05 17 14.05 16.77 14.94 16.35L13.39 14.8C12.95 14.93 12.48 15 12 15C9.24 15 7 12.76 7 10V8.41L1.39 2.81L2.81 1.39L22.61 21.19L21.19 22.61L16.42 17.84ZM19.37 15.16L17.93 13.72C18.44 12.91 18.79 11.99 18.93 11H20.95C20.78 12.54 20.22 13.96 19.37 15.16ZM16.47 12.25L7.69 3.47C8.55 1.99 10.16 1 12 1C14.76 1 17 3.24 17 6V10C17 10.81 16.81 11.57 16.47 12.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMicOffFill;
