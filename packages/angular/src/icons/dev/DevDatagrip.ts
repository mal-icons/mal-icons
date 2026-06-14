import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-datagrip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDatagrip {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-datagrip-6-a)"}],["path",{"fill":"currentColor","d":"M561.7 93.3 600 338.9 529.3 380z"}],["path",{"fill":"currentColor","d":"M561.7 93.3 347 0l-60 49.8z"}],["path",{"fill":"currentColor","d":"M405.4 600 72.1 334.4l-67 201.4z"}],["path",{"fill":"currentColor","d":"M451.9 432.2 0 276.9 405.4 600z"}],["path",{"fill":"currentColor","d":"M0 4.3v272.6l520.7 179 41-362.6z"}],["path",{"fill":"currentColor","d":"M112.5 111.7h375v375h-375z"}],["path",{"fill":"currentColor","d":"M150.6 160.5H211c48.3 0 81.8 32.8 82.5 75.9v1.7c0 43.8-33.7 77.6-82.5 77.6h-60.5zm34 30.8v93.8h26.5a44.3 44.3 0 0 0 46.8-46.4v-0.6a44.6 44.6 0 0 0-46.8-46.8zm115 47.3v-0.5a79.7 79.7 0 0 1 81.3-80.3 85 85 0 0 1 61 21.3l-21.5 26a57 57 0 0 0-39.5-15.8h-1c-24.8 0-44.2 21.6-44.6 47.6v1.2c0 28.4 19.5 49.3 47 49.3 11.50.4 22.7-2.9 32.3-9.3V256h-34.4v-29.5h67.4v67.4c-18.4 16-42 24.7-66.3 24.6-48.4 0-81.6-34-81.6-79.8M147 416.4h140.6v23.4H147z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDatagrip;
