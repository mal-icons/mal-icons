import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-microphone-alt-slash-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMicrophoneAltSlashSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3.72 2.28 L 2.28 3.72 L 11.86 13.3 L 13.29 14.73 L 17.26 18.7 L 18.7 20.14 L 28.28 29.72 L 29.72 28.28 L 20.4 18.96 L 21.84 17.94 C 25.31 17.52 28 14.57 28 11 C 28 7.15 24.86 4 21 4 C 17.42 4 14.47 6.71 14.06 10.19 L 13.05 11.61 L 3.72 2.28 z M 21 6 C 23.77 6 26 8.23 26 11 C 26 12.02 25.7 12.97 25.19 13.75 L 18.25 6.81 C 19.04 6.3 19.98 6 21 6 z M 16.81 8.25 L 23.75 15.19 C 22.97 15.7 22.02 16 21 16 C 18.23 16 16 13.77 16 11 C 16 9.98 16.3 9.04 16.81 8.25 z M 10.72 14.91 L 6 21.59 L 5.53 22.28 L 6.09 22.88 L 6.91 23.69 L 4.28 26.28 L 5.72 27.72 L 8.28 25.13 L 9.66 26.5 L 10.38 26 L 17.09 21.28 L 15.65 19.84 L 9.91 23.91 L 8.13 22.06 L 12.15 16.34 L 10.72 14.91 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMicrophoneAltSlashSolid;
