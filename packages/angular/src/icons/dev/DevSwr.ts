import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-swr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSwr {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M0 304.7a66.3 66.3 0 0 0 132.4 0v-9.4a27.3 27.3 0 0 1 48.4-17.2h42.8a66.3 66.3 0 0 0-130.1 17.2v9.4a27.3 27.3 0 0 1-54.6 0c0-4.3-3.5-7.8-7.8-7.8H7.8a8 8 0 0 0-7.8 7.8m253.3 66.2a66.5 66.5 0 0 1-63.9-49h42.7a27.2 27.2 0 0 0 48.4-17.2v-9.4A66.3 66.3 0 0 1 413 294l0.2 10.8a27.3 27.3 0 0 0 48.4 17.2h42.8c-7.8 28.8-34 49-64 49-36.3 0-66-29.9-66.1-66.2l-0.2-9.7v-0.4a27.3 27.3 0 0 0-54.50.7v9.4a66.3 66.3 0 0 1-66.2 66.2m259.3-93a27.2 27.2 0 0 1 48.4 17.2c0 4.3 3.5 7.8 7.8 7.8h23.3c4.3 0 7.8-3.5 7.8-7.8A66.3 66.3 0 0 0 469.9 278z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSwr;
