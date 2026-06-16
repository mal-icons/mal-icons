import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-quick-phrases",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssQuickPhrases {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M340-60v-221h-10q-106 0-178-76.5T80-540q0-109 75.5-184.5T340-800h53l-77-78 42-42 150 150-150 150-42-42 77-78h-53q-83 0-141.5 58.5T140-540q0 82 54.5 141T330-340h70v135l136-135h85q83 0 141-58.5T820-541q0-83-58.5-141T620-740h-53v-60h53q108 0 184 75.5T880-541q0 109-75.5 185T621-280h-60L340-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssQuickPhrases;
