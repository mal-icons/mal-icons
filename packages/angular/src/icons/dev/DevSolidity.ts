import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-solidity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSolidity {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"fill":"currentColor","clip-path":"url(#devicon-solidity-1-a)"}],["path",{"d":"m396 0-96.5 171.4H106.7L203 0z","opacity":".5"}],["path",{"d":"M299.5 171.4h192.8L396 0H203.1z","opacity":".6"}],["path",{"d":"m203 342.8 96.5-171.4L203 0l-96.4 171.4z","opacity":".8"}],["path",{"d":"m204 600 96.5-171.4h192.8L397 600z","opacity":".5"}],["path",{"d":"M300.5 428.6H107.6L204 600h192.9z","opacity":".6"}],["path",{"d":"m396.9 257.2-96.4 171.4L396.9 600l96.4-171.4z","opacity":".8"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSolidity;
