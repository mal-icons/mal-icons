import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-fingerprint-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFingerprint2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1C16.97 1 21 5.03 21 10V14C21 18.97 16.97 23 12 23C10.91 23 9.87 22.81 8.91 22.45C9.04 22.28 9.16 22.1 9.28 21.91L9.45 21.63C10.39 20.06 10.95 18.24 11 16.29L11 16V9H13V16C13 17.77 12.65 19.46 12 21C12.8 21 13.56 20.87 14.27 20.62C14.71 19.26 14.97 17.81 15 16.31L15 16L15 13H17L17 16C17 17.09 16.9 18.15 16.7 19.18C18.06 17.96 18.93 16.2 19 14.24L19 14V10C19 6.13 15.87 3 12 3C10.43 3 8.98 3.52 7.81 4.39L6.38 2.97C7.92 1.74 9.88 1 12 1ZM7 10C7 7.24 9.24 5 12 5C14.76 5 17 7.24 17 10V11H15V10C15 8.34 13.66 7 12 7C10.4 7 9.1 8.25 9.01 9.82L9 10V16C9 17.57 8.6 19.04 7.9 20.32L7.87 20.36C7.64 20.78 7.38 21.17 7.09 21.54C6.65 21.25 6.24 20.93 5.85 20.57L5.54 20.27C3.97 18.65 3 16.44 3 14V10C3 7.88 3.74 5.92 4.97 4.38L6.39 5.81C5.56 6.92 5.05 8.28 5 9.76L5 10V14C5 15.67 5.59 17.21 6.57 18.42C6.82 17.74 6.97 17 7 16.24L7 16V10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFingerprint2Line;
