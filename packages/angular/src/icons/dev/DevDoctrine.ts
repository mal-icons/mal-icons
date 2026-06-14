import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-doctrine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDoctrine {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m442.8 196.3-1.5-1.7L261.9 16a54.8 54.8 0 0 0-77.3 77.7l59.2 59a227.2 227.2 0 1 0 199 43.6"}],["path",{"fill":"currentColor","d":"m434.2 344.8-129.6-128a43.9 43.9 0 0 0-61.7 62.3l53.7 53H183.3a43.9 43.9 0 1 0 0 87.7h114.4l-54.5 54.9a43.9 43.9 0 0 0 62.3 61.8L431 410.2l0.6-0.7a43.7 43.7 0 0 0 2.6-64.7"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDoctrine;
