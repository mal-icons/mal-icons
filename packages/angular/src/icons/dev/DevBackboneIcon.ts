import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-backbone-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBackboneIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M58.5 0v324.5L300 462.2v-93.6l-161.6-92.1V131.8L300 223.9v-86.2z"}],["path",{"fill":"currentColor","d":"M541.5 0v324.5L300 462.2v-93.6l161.6-92.1V131.8L300 223.9v-86.2zm-483 600V275.5L300 137.8v93.6l-161.6 92.1v137.3l161.6-92v93.5z"}],["path",{"fill":"currentColor","d":"M541.5 600V275.5L300 137.8v93.6l161.6 92.1v137.3l-161.6-92v93.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBackboneIcon;
