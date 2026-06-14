import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-pycharm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPycharm {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-pycharm-6-a)"}],["path",{"fill":"currentColor","d":"M420.7 94.7 596 240.5l-63.1 128.4-105.7-29.3h-91.4z"}],["path",{"fill":"currentColor","d":"m244 189.4-33.9 179.5-3.2 61-85.6 37.1L0 480 36.8 92.2 256.6 0l135.5 88.8z"}],["path",{"fill":"currentColor","d":"m244 189.4 16.6 346-54.9 64.6L0 480l169-251.7z"}],["path",{"fill":"currentColor","d":"M470.4 164.1H262.6L446.2 0z"}],["path",{"fill":"currentColor","d":"M600 536.7 417 599l-243.7-68.7 70.8-340.8 28.2-25.3 148.4-14-13.4 149 118-45.7z"}],["path",{"fill":"currentColor","d":"M112.5 112.5h375v375h-375z"}],["path",{"fill":"currentColor","d":"M159.3 416.6h140.6v23.5H159.3zm0-257.2H217c33.1 0 53.4 19.5 53.8 47.7v1.2c0 32.5-25.3 49.4-56.8 49.4h-23.3v42.1h-31.2zm55.4 70.8c15.2 0 24.2-8.9 24.5-20.7v-1c0-13.8-9.6-21.3-25-21.3h-23.6v43zm72.7-0.1v-0.4a71.3 71.3 0 0 1 73.2-72.6c20.7-1 40.9 6.8 55.4 21.6l-19.6 22.7a52 52 0 0 0-36-15.9c-23.4 0-40.3 19.3-40.7 43v1.2c0 24 16.7 44.1 40.7 44.1 14.6 0 24-5.2 34-13.7l1.5-1.4 1.5-1.3 19.6 19.8a72 72 0 0 1-57.6 25 71 71 0 0 1-72-72.1"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPycharm;
