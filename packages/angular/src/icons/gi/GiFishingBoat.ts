import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fishing-boat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFishingBoat {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M232.54 67.15l-17.08 5.69L241.51 151h18.98zM71.28 106.71l-14.56 10.59L71 136.93V230h18v-68.32L161.23 261h22.26zM272 117v18h39v16h18v-16h39v-18zm-23 52v126h108.94l-5.11-46H279v-80zm48 0v62h53.83l-6.89-62zM89 279v16h110v-16zm-70.01 34l41.25 110h319.68l114.25-110H140.59C157.02 318.35 169 333.85 169 352c0 22.54-18.46 41-41 41s-41-18.46-41-41c0-18.15 11.98-33.65 28.41-39zM128 329c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm208 0h80v18h-80zM96 439c-28.78 2.34-51.11 8.2-78.61 16.39l5.22 17.23C45.82 467.21 71.59 457.29 96 457c23.67 0 49.28 16 80 16s56.34-16 80-16 49.28 16 80 16 56.34-16 80-16c27.73 2.18 46.87 7.73 73.39 15.61l5.22-17.23C468.54 448.76 443.47 439.27 416 439c-30.72 0-56.33 16-80 16s-49.27-16-80-16-56.33 16-80 16-49.27-16-80-16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFishingBoat;
