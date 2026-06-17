import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-medical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkMedical {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 5.5a0.50.5 0 0 0-1 0v0.63l-0.55-0.32a0.50.5 0 1 0-0.50.87L6 7l-0.550.32a0.50.5 0 1 0 0.50.87l0.55-0.32V8.5a0.50.5 0 1 0 1 0v-0.63l0.550.32a0.50.5 0 1 0 0.5-0.87L8 7l0.55-0.32a0.50.5 0 1 0-0.5-0.87l-0.550.32zm-2 4.5a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1z"}],["path",{"d":"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkMedical;
