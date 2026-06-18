import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-scissors-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiScissorsLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.45 8.03L12 10.58L18.73 3.85C19.51 3.07 20.78 3.07 21.56 3.85L9.45 15.96C9.8 16.56 10 17.25 10 18C10 20.21 8.21 22 6 22C3.79 22 2 20.21 2 18C2 15.79 3.79 14 6 14C6.74 14 7.44 14.2 8.03 14.55L10.59 12L8.03 9.44C7.44 9.79 6.74 10 6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 6.74 9.8 7.43 9.45 8.03ZM14.83 13.41L21.56 20.14C20.78 20.92 19.51 20.92 18.73 20.14L13.41 14.82L14.83 13.41ZM7.41 16.58C7.05 16.22 6.55 16 6 16C4.9 16 4 16.89 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 17.44 7.78 16.94 7.41 16.58ZM7.41 7.41C7.78 7.05 8 6.55 8 6C8 4.89 7.1 4 6 4C4.9 4 4 4.89 4 6C4 7.1 4.9 8 6 8C6.55 8 7.05 7.77 7.41 7.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiScissorsLine;
