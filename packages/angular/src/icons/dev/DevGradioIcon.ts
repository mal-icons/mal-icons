import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-gradio-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevGradioIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M281 190.1a38 38 0 0 1 38 0l261.7 150a38.3 38.3 0 0 1 0 66.5l-261.6 150a38 38 0 0 1-38.2 0l-261.6-150a38.3 38.3 0 0 1 0-66.5zm19 77.4L115.3 373.4 300 479.2l184.6-105.8z"}],["path",{"fill":"currentColor","d":"M281 43.4a38 38 0 0 1 38 0l261.7 150a38.3 38.3 0 0 1 0 66.5l-261.6 150a38 38 0 0 1-38.2 0l-261.6-150a38.3 38.3 0 0 1 0-66.5zm19 77.4L115.3 226.6 300 332.4l184.6-105.8z"}],["path",{"fill":"currentColor","d":"m281.7 190 37.9 66.7L57.3 406l-38-66.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevGradioIcon;
