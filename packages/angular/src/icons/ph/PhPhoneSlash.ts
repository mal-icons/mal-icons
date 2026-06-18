import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-phone-slash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhPhoneSlash {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M53.93,34.62A8,8,0,1,0,42.09,45.38L69.68,75.74a141.26,141.26,0,0,0-45.27,30.44c-20,20-21.92,49.46-4.69,71.67a16,16,0,0,0,18.38,5.07l49-17.370.29-0.11a16,16,0,0,0,9.75-11.72l5.9-29.51a75.89,75.89,0,0,1,8.56-2.4l90.51,99.57a8,8,0,1,0,11.84-10.76Zm43.7,74.52a16,16,0,0,0-10.32,11.94l-5.9,29.5-48.78,17.3c-0.1,0-0.170.13-0.270.17-12.33-15.9-11-36.22,3.36-50.56a125.79,125.79,0,0,1,45.47-29.1l18.3,20.14C98.87,108.73,98.25,108.92,97.63,109.14Zm138.65,68.71a16,16,0,0,1-18.38,5.07l-9.25-3.28A8,8,0,0,1,214,164.56l9.37,3.320.30.12c12.3-15.85,11-36.17-3.39-50.51-25.66-25.66-61.88-39.27-99.35-37.31a8,8,0,1,1-0.83-16c42-2.19,82.63,13.1,111.49,42C251.58,126.17,253.51,155.64,236.28,177.85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhPhoneSlash;
