import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-playstation-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPlaystationLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.58 17.01C22.15 17.55 21.1 17.94 21.1 17.94L13.27 20.76V18.68L19.03 16.62C19.69 16.39 19.79 16.06 19.26 15.88C18.73 15.71 17.77 15.76 17.11 16L13.27 17.35V15.19L13.49 15.12C13.49 15.12 14.6 14.73 16.16 14.55C17.72 14.38 19.63 14.58 21.13 15.15C22.82 15.68 23.01 16.47 22.58 17.01ZM14.02 13.47V8.16C14.02 7.54 13.9 6.96 13.32 6.8C12.87 6.66 12.59 7.07 12.59 7.7V21L9.01 19.86V4C10.53 4.28 12.75 4.95 13.94 5.36C16.98 6.4 18.01 7.7 18.01 10.62C18.01 13.47 16.25 14.55 14.02 13.47ZM2.43 18.46C0.7 17.97 0.41 16.95 1.2 16.37C1.93 15.83 3.17 15.42 3.17 15.42L8.31 13.59V15.67L4.61 17C3.96 17.23 3.86 17.56 4.39 17.74C4.92 17.91 5.88 17.86 6.54 17.63L8.31 16.98V18.85C8.2 18.87 8.07 18.89 7.96 18.91C6.18 19.2 4.29 19.08 2.43 18.46Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPlaystationLine;
