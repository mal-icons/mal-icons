import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bootstrap-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBootstrapFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.42 3.04C4.14 3.04 3.19 4.16 3.23 5.38C3.27 6.55 3.22 8.07 2.84 9.3C2.46 10.54 1.81 11.33 0.75 11.43V12.57C1.81 12.67 2.46 13.46 2.84 14.7C3.22 15.93 3.27 17.45 3.23 18.62C3.19 19.84 4.14 20.96 5.42 20.96H18.58C19.86 20.96 20.81 19.84 20.77 18.62C20.73 17.45 20.78 15.93 21.16 14.7C21.55 13.46 22.19 12.67 23.25 12.57V11.43C22.19 11.33 21.55 10.54 21.16 9.3C20.78 8.07 20.73 6.55 20.77 5.38C20.81 4.16 19.86 3.04 18.58 3.04H5.42H5.42ZM16 14.07C16 15.75 14.75 16.77 12.68 16.77H9.14C9.04 16.77 8.94 16.73 8.87 16.66C8.8 16.58 8.76 16.49 8.76 16.39V7.61C8.76 7.51 8.8 7.42 8.87 7.34C8.94 7.27 9.04 7.23 9.14 7.23H12.66C14.39 7.23 15.52 8.17 15.52 9.61C15.52 10.62 14.76 11.53 13.79 11.69V11.74C15.11 11.88 16 12.8 16 14.07ZM12.29 8.44H10.27V11.29H11.97C13.28 11.29 14.01 10.76 14.01 9.82C14.01 8.93 13.39 8.44 12.29 8.44ZM10.27 12.42V15.56H12.36C13.73 15.56 14.45 15.01 14.45 13.98C14.45 12.95 13.71 12.42 12.28 12.42L10.27 12.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBootstrapFill;
