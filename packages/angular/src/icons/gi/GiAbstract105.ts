import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-105",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract105 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m256,11c-83.48,0-157.23,10.83-202.89,27.41-26.59,62.06-42.11,136.94-42.11,217.59 0,55.12 7.27,107.49 20.37,154.96 57.63,15.25 136.71,24.81 224.48,24.81s167.11-9.55 224.79-24.81c13.05-47.47 20.37-99.84 20.37-154.96 0-80.65-15.37-155.53-41.96-217.59-45.66-16.58-119.56-27.41-203.04-27.41zm0.15,62.32c25.85,0 46.7,81.81 46.7,182.68s-20.86,125.56-46.7,125.56-46.86-24.7-46.86-125.56 21.01-182.68 46.86-182.68zm-128.17,22.05c22.73,0 41.04,71.94 41.04,160.63s-18.31,103.36-41.04,103.36-41.19-14.67-41.19-103.36 18.46-160.63 41.19-160.63zm256.33,0c22.73,0 41.04,71.94 41.04,160.63s-18.31,103.36-41.04,103.36-41.19-14.67-41.19-103.36 18.47-160.63 41.19-160.63zm-347.75,333.2c4.9,15.57 10.42,30.57 16.54,44.87 45.66,16.63 119.4,27.56 202.89,27.56s157.39-10.93 203.04-27.56c6.12-14.3 11.65-29.3 16.54-44.87-52.92,16.52-131.65,27.1-219.73,27.1-88.01,0-166.38-10.6-219.28-27.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract105;
