import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-apple-app-store",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAppleAppStore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M3,17 C2.45,17 2,16.55 2,16 C2,15.45 2.45,15 3,15 L13.5,15 C14.5,15 15.5,17 15,17 L3,17 Z M17,17 C16.45,17 16,16.55 16,16 C16,15.45 16.45,15 17,15 L21,15 C21.55,15 22,15.45 22,16 C22,16.55 21.55,17 21,17 L17,17 Z M12.63,3.5 C12.91,3.02 13.52,2.86 14,3.13 C14.48,3.41 14.64,4.02 14.37,4.5 L7.46,16.5 C7.18,16.97 6.57,17.14 6.09,16.86 C5.62,16.59 5.45,15.98 5.73,15.5 L12.63,3.5 Z M4,18.5 C4.5,17.5 7.5,16.5 6.5,18.22 C6.32,18.53 5.78,19.45 4.87,21 C4.59,21.48 3.98,21.64 3.5,21.37 C3.02,21.09 2.86,20.48 3.13,20 L4,18.5 Z M9.13,4.5 C8.86,4.02 9.02,3.41 9.5,3.13 C9.98,2.86 10.59,3.02 10.87,3.5 L12.61,6.53 C12.89,7.01 12.72,7.62 12.24,7.9 C11.76,8.17 11.15,8.01 10.88,7.53 L9.13,4.5 Z M13,11.5 C12.1,10 13,7 13.72,8.5 L20.37,20 C20.64,20.48 20.48,21.09 20,21.37 C19.52,21.64 18.91,21.48 18.63,21 L13,11.5 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAppleAppStore;
