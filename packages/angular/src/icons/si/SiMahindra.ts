import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mahindra",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMahindra {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.15 11.31H6.78a0.670.67 0 0 1 0.670.66v1.51H5.01a0.410.41 0 0 1-0.41-0.4v-0.52a0.380.38 0 0 1 0.38-0.37h1.35l-0.140.31h-1c-0.04 0-0.090.03-0.090.08v0.41c0 0.050.050.080.090.08h1.73v-0.99c0-0.19-0.17-0.34-0.36-0.34H4.95l0.2-0.42zm13.43-0.79v2.96h-2.38a0.410.41 0 0 1-0.41-0.4v-1.11a0.670.67 0 0 1 0.68-0.66h1.36l-0.20.42h-0.95c-0.19 0-0.360.15-0.360.34v0.91c0 0.050.050.080.090.08h1.64v-2.54h0.53zM10.2 13.48h0.53v-1.51a0.670.67 0 0 0-0.67-0.66H8.93l-0.20.42h1.11c0.19 0 0.360.150.360.34v1.41zm-2.19-2.96v2.96h0.53v-2.96h-0.53zm-4.4 2.96h0.53v-1.51a0.670.67 0 0 0-0.67-0.66H0v2.17h0.53v-1.67c0-0.050.05-0.080.09-0.08h1.09c0.04 0 0.090.030.090.08v1.67h0.53v-1.67c0-0.050.05-0.080.09-0.08h0.83c0.19 0 0.360.150.360.34v1.41zm17.72-2.17H20a0.670.67 0 0 0-0.670.66v1.51h0.53v-1.41c0-0.190.17-0.340.36-0.34h0.91l0.2-0.42zm-6.75 0a0.670.67 0 0 1 0.680.66v1.51h-0.53v-1.41c0-0.19-0.17-0.34-0.36-0.34h-1.27v1.75h-0.53v-2.17c0.67 0 1.330 20zm-3.190.140.53-0.31v2.34h-0.53v-2.03zm0.53-0.61v-0.32h-0.53v0.63l0.53-0.3zm9.780.47h1.63a0.670.67 0 0 1 0.670.66v1.51h-2.44a0.410.41 0 0 1-0.41-0.4v-0.52a0.380.38 0 0 1 0.38-0.37h1.35l-0.140.31h-1c-0.04 0-0.090.03-0.090.08v0.41c0 0.050.050.080.090.08h1.73v-0.99c0-0.19-0.17-0.34-0.36-0.34h-1.62l0.2-0.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMahindra;
