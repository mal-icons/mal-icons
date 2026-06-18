import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-honor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHonor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.6 9.75v1.82H0.81V9.75H0v4.5h0.81v-1.87h1.79v1.87h0.81V9.75h-0.81Zm18.670.8h0.9c0.37 0 0.670.30.670.66a0.670.67 0 0 1-0.670.66h-0.9v-1.32Zm-0.81-0.8v4.5h0.81v-2l1.68 2H24l-1.38-1.64a1.46 1.46 0 0 0-0.44-2.86h-1.720Zm-7.63-0.01v2.81l-1.96-2.81h-0.64v4.5h0.81v-2.82l1.97 2.82h0.63V9.74h-0.8Zm-7.53 2.26c0-0.830.68-1.51 1.52-1.51A1.51 1.51 0 0 1 8.34 12c0 0.83-0.68 1.51-1.52 1.51-0.4 0-0.79-0.16-1.07-0.44A1.5 1.5 0 0 1 5.3 12v0ZM4.5 12c0 0.930.57 1.77 1.43 2.130.870.36 1.870.16 2.53-0.50.66-0.660.86-1.650.5-2.51a2.32 2.32 0 0 0-2.15-1.42 2.32 2.32 0 0 0-2.32 2.31L4.5 12Zm11.040a1.51 1.51 0 0 1 1.52-1.51c0.84 0 1.520.68 1.52 1.51a1.51 1.51 0 0 1-1.52 1.51c-0.4 0-0.79-0.16-1.07-0.44a1.5 1.5 0 0 1-0.44-1.07ZM14.73 12c0 0.930.57 1.77 1.43 2.130.870.36 1.870.16 2.53-0.50.67-0.660.86-1.650.5-2.51a2.33 2.33 0 0 0-2.15-1.42 2.32 2.32 0 0 0-2.32 2.31V12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHonor;
