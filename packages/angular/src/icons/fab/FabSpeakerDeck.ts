import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-speaker-deck",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabSpeakerDeck {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M213.86 296H100a100 100 0 0 1 0-200h132.84a40 40 0 0 1 0 80H98c-26.47 0-26.45 40 0 40h113.82a100 100 0 0 1 0 200H40a40 40 0 0 1 0-80h173.86c26.48 0 26.46-40 0-40zM298 416a120.21 120.21 0 0 0 51.11-80h64.55a19.83 19.83 0 0 0 19.66-20V196a19.83 19.83 0 0 0-19.66-20H296.42a60.77 60.77 0 0 0 0-80h136.93c43.44 0 78.65 35.82 78.65 80v160c0 44.18-35.21 80-78.65 80z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabSpeakerDeck;
