import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-remove-done",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRemoveDone {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M829-110 575-364l-93 93q-5 5-10 7t-11 2q-6 0-11-2t-10-7L259-452q-9-9-8.5-22.5T259-496q10-10 21.5-9.5T301-496l160 160 71-71-408-407q-9-9-8.5-22.5T124-858q10-10 21.5-9.5T166-858l706 706q9 9 9 21t-9 21q-9 9-21.5 8.5T829-110ZM660-449l-43-43 207-207q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L660-449Zm-85-85-43-43 122-122q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L575-534ZM291-262q-6 0-11-2t-10-7L89-452q-9-9-8.5-22.5T89-496q10-10 21.5-9.5T131-496l160 160 43 43-22 22q-5 5-10 7t-11 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRemoveDone;
