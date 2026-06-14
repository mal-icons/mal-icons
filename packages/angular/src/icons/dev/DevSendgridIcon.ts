import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-sendgrid-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSendgridIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-sendgrid-icon-1-a)"}],["path",{"fill":"currentColor","d":"M600 0v400H400v200H0V200h200V0z"}],["path",{"fill":"currentColor","d":"M0 600h200V400H0z"}],["path",{"fill":"currentColor","d":"M400 400h200V200H400zM200 200h200V0H200z"}],["path",{"fill":"currentColor","d":"M200 400h200V200H200z"}],["path",{"fill":"currentColor","d":"M400 200h200V0H400z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSendgridIcon;
