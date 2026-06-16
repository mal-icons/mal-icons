import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-motorcycle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMotorcycle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M447-540H343h213-109ZM200-200q-83 0-141.5-58.5T0-400q0-83 58.5-141.5T200-600h474L574-700H423v-60h176l160 160q90 0 145.5 61T960-400q0 83-58.5 141.5T760-200q-83 0-141.5-58.5T560-400q0-18 2.5-35.5T572-470L462-360h-66q-14 70-69 115t-127 45Zm560-60q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm-560 0q45 0 84-28t53-82H220v-60h117q-14-54-53-82t-84-28q-58 0-99 41t-41 99q0 58 41 99t99 41Zm198-170h49l109-110H343q20 20 35 48.5t20 61.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMotorcycle;
