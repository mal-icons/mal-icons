import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-medical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileMedical {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 4.5a0.50.5 0 0 0-1 0v0.63l-0.55-0.32a0.50.5 0 1 0-0.50.87L7 6l-0.550.32a0.50.5 0 1 0 0.50.87l0.55-0.32V7.5a0.50.5 0 1 0 1 0v-0.63l0.550.32a0.50.5 0 1 0 0.5-0.87L9 6l0.55-0.32a0.50.5 0 1 0-0.5-0.87l-0.550.32zM5.5 9a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1z"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileMedical;
